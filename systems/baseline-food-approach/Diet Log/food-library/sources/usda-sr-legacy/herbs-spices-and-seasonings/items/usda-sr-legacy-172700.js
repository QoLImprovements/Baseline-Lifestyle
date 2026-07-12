/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "piece-1-9-of-20-oz-cake",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172700",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "piece-1-9-of-20-oz-cake",
      "kind": "unit",
      "label": "piece (1/9 of 20 oz cake)"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "individual-cake",
      "kind": "unit",
      "label": "individual cake"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, coffeecake, cinnamon with crumb topping, commercially prepared, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 46.7,
    "energy_kcal": 1750.0,
    "fat_g": 23.3,
    "fibre_g": 2.0,
    "folate_ug": 61.0,
    "iron_mg": 1.91,
    "magnesium_mg": 22.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 108.0,
    "potassium_mg": 123.0,
    "protein_g": 6.8,
    "salt_g": 0.8775,
    "sat_fat_g": 5.8,
    "sodium_mg": 351.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172700",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
