/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products",
  "id": "cofid-current-11-844",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastries, chocolate eclairs, cream filled, retail",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 28.2,
    "energy_kcal": 387.0,
    "fat_g": 28.5,
    "fibre_g": 1.4,
    "folate_ug": 11.0,
    "iron_mg": 1.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.74,
    "phosphorus_mg": 120.0,
    "potassium_mg": 161.0,
    "protein_g": 6.1,
    "salt_g": 0.3125,
    "sat_fat_g": 13.59,
    "sodium_mg": 125.0,
    "sugar_g": 24.0,
    "vitamin_a_ug": 255.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-844",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
