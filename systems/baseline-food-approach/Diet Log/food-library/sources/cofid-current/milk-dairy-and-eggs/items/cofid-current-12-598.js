/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Standardised milk. Samples taken in June and September",
  "id": "cofid-current-12-598",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, whole, pasteurised, summer and autumn",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 4.1,
    "energy_kcal": 61.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.02,
    "magnesium_mg": 12.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 95.0,
    "potassium_mg": 160.0,
    "protein_g": 3.4,
    "salt_g": 0.1125,
    "sat_fat_g": 2.29,
    "sodium_mg": 45.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-598",
  "state": "Unspecified",
  "subcategory": "BAK",
  "tags": [
    "bak",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
