/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "bottle-nfs",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169042",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "bottle-nfs",
      "kind": "unit",
      "label": "bottle NFS"
    },
    {
      "gramsPerUnit": 30.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Babyfood, juice, apple-sweet potato",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 11.4,
    "energy_kcal": 195.0,
    "fat_g": 0.1,
    "fibre_g": 0.5,
    "folate_ug": 3.0,
    "iron_mg": 0.3,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 137.0,
    "protein_g": 0.3,
    "salt_g": 0.0125,
    "sat_fat_g": 0.03,
    "sodium_mg": 5.0,
    "sugar_g": 9.6,
    "vitamin_a_ug": 154.0,
    "vitamin_c_mg": 34.1,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169042",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
