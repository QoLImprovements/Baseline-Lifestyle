/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709049",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, brown, with tomatoes and/or tomato based sauce, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 18.8,
    "energy_kcal": 105.0,
    "fat_g": 2.41,
    "fibre_g": 1.7,
    "folate_ug": 9.0,
    "iron_mg": 0.55,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 114.0,
    "protein_g": 2.13,
    "salt_g": 0.435,
    "sat_fat_g": 0.413,
    "sodium_mg": 174.0,
    "sugar_g": 0.89,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709049",
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
