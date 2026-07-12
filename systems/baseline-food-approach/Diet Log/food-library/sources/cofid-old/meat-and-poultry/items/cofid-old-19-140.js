/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands",
  "id": "cofid-old-19-140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, mince, in gravy, canned",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 3.2,
    "energy_kcal": 161.0,
    "fat_g": 11.7,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.6,
    "magnesium_mg": 11.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 85.0,
    "potassium_mg": 150.0,
    "protein_g": 10.8,
    "salt_g": 0.95,
    "sat_fat_g": 5.0,
    "sodium_mg": 380.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-140",
  "state": "Canned",
  "subcategory": "MI",
  "tags": [
    "canned",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
