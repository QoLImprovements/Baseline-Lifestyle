/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169874",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar-heinz-junior-3-6-oz",
      "kind": "unit",
      "label": "jar Heinz Junior-3 (6 oz)"
    }
  ],
  "name": "Babyfood, fruit, tutti frutti, junior",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 16.0,
    "energy_kcal": 69.0,
    "fat_g": 0.4,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 0.3,
    "magnesium_mg": 4.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 28.0,
    "potassium_mg": 47.0,
    "protein_g": 0.4,
    "salt_g": 0.0425,
    "sat_fat_g": 0.11,
    "sodium_mg": 17.0,
    "sugar_g": 9.41,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 7.2,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169874",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
