/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "2 samples. 76% meat",
  "id": "cofid-old-19-155",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey roast, frozen, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 170.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.5,
    "magnesium_mg": 25.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 300.0,
    "potassium_mg": 300.0,
    "protein_g": 26.7,
    "salt_g": 1.325,
    "sat_fat_g": 2.5,
    "sodium_mg": 530.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-155",
  "state": "Frozen",
  "subcategory": "MI",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
