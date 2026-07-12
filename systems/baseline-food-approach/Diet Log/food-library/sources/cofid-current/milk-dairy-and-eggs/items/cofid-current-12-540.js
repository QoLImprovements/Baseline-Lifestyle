/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "20 samples, 7 brands, portions and tubs",
  "id": "cofid-current-12-540",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese spread, plain",
  "nutritionPerBasis": {
    "calcium_mg": 498.0,
    "carbs_g": 6.5,
    "energy_kcal": 237.0,
    "fat_g": 18.6,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 0.0,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 835.0,
    "potassium_mg": 219.0,
    "protein_g": 11.3,
    "salt_g": 1.825,
    "sat_fat_g": 12.91,
    "sodium_mg": 730.0,
    "sugar_g": 6.5,
    "vitamin_a_ug": 234.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-540",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
