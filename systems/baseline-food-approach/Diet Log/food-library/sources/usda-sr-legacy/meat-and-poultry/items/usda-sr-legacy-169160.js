/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-whole",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169160",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-whole",
      "kind": "unit",
      "label": "3 oz whole"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb-whole",
      "kind": "unit",
      "label": "lb whole"
    }
  ],
  "name": "Pork, cured, ham and water product, whole, boneless, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 4.21,
    "energy_kcal": 490.0,
    "fat_g": 4.99,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.78,
    "magnesium_mg": 17.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 228.0,
    "potassium_mg": 267.0,
    "protein_g": 14.0,
    "salt_g": 3.275,
    "sat_fat_g": 1.49,
    "sodium_mg": 1310.0,
    "sugar_g": 4.21,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169160",
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
