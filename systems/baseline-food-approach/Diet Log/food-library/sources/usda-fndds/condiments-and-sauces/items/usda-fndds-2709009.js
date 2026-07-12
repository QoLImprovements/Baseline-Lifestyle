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
  "id": "usda-fndds-2709009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 206.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, white, with tomatoes and/or tomato-based sauce, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 19.8,
    "energy_kcal": 91.0,
    "fat_g": 0.27,
    "fibre_g": 0.9,
    "folate_ug": 41.0,
    "iron_mg": 0.98,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 87.0,
    "protein_g": 2.04,
    "salt_g": 0.5025,
    "sat_fat_g": 0.062,
    "sodium_mg": 201.0,
    "sugar_g": 0.89,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709009",
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
