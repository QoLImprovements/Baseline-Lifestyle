/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "packet-75-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-173649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "packet-75-oz",
      "kind": "unit",
      "label": "packet (.75 oz)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "envelope",
      "kind": "unit",
      "label": "envelope"
    }
  ],
  "name": "Beverages, Dairy drink mix, chocolate, reduced calorie, with low-calorie sweeteners, powder",
  "nutritionPerBasis": {
    "calcium_mg": 1410.0,
    "carbs_g": 51.4,
    "energy_kcal": 329.0,
    "fat_g": 2.6,
    "fibre_g": 9.4,
    "folate_ug": 33.0,
    "iron_mg": 7.7,
    "magnesium_mg": 210.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 893.0,
    "potassium_mg": 2240.0,
    "protein_g": 25.0,
    "salt_g": 1.6475,
    "sat_fat_g": 1.87,
    "sodium_mg": 659.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 209.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173649",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
