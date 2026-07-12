/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from medium cooked noodles",
  "id": "cofid-current-11-942",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Noodles, egg, thick, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 30.7,
    "energy_kcal": 143.0,
    "fat_g": 0.9,
    "fibre_g": 2.6,
    "folate_ug": 5.0,
    "iron_mg": 0.95,
    "magnesium_mg": 22.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 76.0,
    "potassium_mg": 64.0,
    "protein_g": 5.0,
    "salt_g": 0.3025,
    "sat_fat_g": 0.13,
    "sodium_mg": 121.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-942",
  "state": "Boiled",
  "subcategory": "AD",
  "tags": [
    "ad",
    "boiled",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
