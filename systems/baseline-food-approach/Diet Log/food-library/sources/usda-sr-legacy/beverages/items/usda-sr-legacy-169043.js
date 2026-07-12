/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle-nfs",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169043",
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
  "name": "Babyfood, juice, orange-carrot",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 9.9,
    "energy_kcal": 180.0,
    "fat_g": 0.1,
    "fibre_g": 0.4,
    "folate_ug": 39.0,
    "iron_mg": 0.2,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 174.0,
    "protein_g": 0.5,
    "salt_g": 0.025,
    "sat_fat_g": 0.01,
    "sodium_mg": 10.0,
    "sugar_g": 8.4,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 34.1,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169043",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
