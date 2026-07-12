/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "5 samples, 4 brands. 45-60% meat",
  "id": "cofid-old-19-123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken kiev, frozen, baked",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 11.1,
    "energy_kcal": 268.0,
    "fat_g": 16.9,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.8,
    "magnesium_mg": 24.0,
    "omega3_g": 0.41,
    "phosphorus_mg": 190.0,
    "potassium_mg": 280.0,
    "protein_g": 18.6,
    "salt_g": 0.85,
    "sat_fat_g": 7.1,
    "sodium_mg": 340.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-123",
  "state": "Baked",
  "subcategory": "MI",
  "tags": [
    "baked",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
