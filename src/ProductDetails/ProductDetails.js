import React from 'react'
import classes from './ProductDetails.module.css'



const ProductDetails = (props) =>{
    const ProductData = props.data

    const colorOptions = ProductData.colorOptions.map((item,pos) =>{
        const classArray = [classes.ProductImage]
        if(pos === props.currentPreviewImagePos){
            classArray.push(classes.SelectedImage)
        }
        return(
            <img key={pos} className={classArray.join(' ')} 
                src={item.imageUrl} alt={item.styleName}
                onClick={() => props.onColorOptionClick(pos)}
            />
        )
    })

    const featureList = ProductData.featureList.map((item,pos) =>{
        const classArray = [classes.FeatureItem]
        if(pos === props.currentSelectedFeature){
            classArray.push(classes.SelectedFeatureItem)
        }
        return(
            <button 
                key={pos} 
                className={classArray.join(' ')}
                onClick={() => props.onFeatureItemClick(pos)}
            >
                {item}
            </button>
        )
    })

    return(
        <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
        <p className={classes.ProductDescription}>{ProductData.description}</p>
      
        <h3 className={classes.SectionHeading}>Select Color</h3>
        <div>
            {colorOptions}
        </div>
        <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {featureList}
          </div>
          <button className={classes.PrimaryButton}>Buy Now</button>
      </div>
    )
}
export default ProductDetails