/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "0-66-cup-6-scoop",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170492",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 167.0,
      "key": "0-66-cup-6-scoop",
      "kind": "unit",
      "label": "0.66 cup (#6 scoop)"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Corn pudding, home prepared",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 17.0,
    "energy_kcal": 131.0,
    "fat_g": 5.04,
    "fibre_g": 1.2,
    "folate_ug": 29.0,
    "iron_mg": 0.53,
    "magnesium_mg": 15.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 90.0,
    "potassium_mg": 176.0,
    "protein_g": 4.42,
    "salt_g": 0.705,
    "sat_fat_g": 2.45,
    "sodium_mg": 282.0,
    "sugar_g": 6.59,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170492",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "sweets-and-desserts",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
