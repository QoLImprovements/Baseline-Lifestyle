/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171339",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, fruit, prunes with tapioca, without ascorbic acid, junior",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 18.7,
    "energy_kcal": 293.0,
    "fat_g": 0.1,
    "fibre_g": 2.7,
    "folate_ug": 1.0,
    "iron_mg": 0.33,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 162.0,
    "protein_g": 0.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.008,
    "sodium_mg": 2.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 15.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171339",
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
