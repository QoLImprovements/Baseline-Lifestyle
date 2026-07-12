/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb-shank",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169162",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb-shank",
      "kind": "unit",
      "label": "lb shank"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-shank",
      "kind": "unit",
      "label": "3 oz shank"
    }
  ],
  "name": "Pork, cured, ham and water product, shank, bone-in, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.42,
    "energy_kcal": 243.0,
    "fat_g": 20.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.82,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 215.0,
    "protein_g": 14.3,
    "salt_g": 2.34,
    "sat_fat_g": 6.58,
    "sodium_mg": 936.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169162",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
