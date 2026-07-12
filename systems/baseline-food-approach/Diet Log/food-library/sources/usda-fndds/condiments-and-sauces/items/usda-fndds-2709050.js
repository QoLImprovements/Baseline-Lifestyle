/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709050",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, brown, with tomatoes and/or tomato based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 19.1,
    "energy_kcal": 92.0,
    "fat_g": 0.76,
    "fibre_g": 1.7,
    "folate_ug": 9.0,
    "iron_mg": 0.56,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 116.0,
    "protein_g": 2.16,
    "salt_g": 0.4425,
    "sat_fat_g": 0.194,
    "sodium_mg": 177.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709050",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "condiments-and-sauces",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
