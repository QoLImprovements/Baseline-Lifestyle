/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Cooked smoked sausage. Literature sources and manufacturers' data",
  "id": "cofid-old-19-096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausage, Bierwurst",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.2,
    "energy_kcal": 284.0,
    "fat_g": 24.7,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.5,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 170.0,
    "protein_g": 14.2,
    "salt_g": 2.175,
    "sat_fat_g": 12.3,
    "sodium_mg": 870.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-096",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
