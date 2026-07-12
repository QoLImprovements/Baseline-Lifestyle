/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "8 samples, 7 brands",
  "id": "cofid-old-19-027",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork shoulder, cured, slices",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.9,
    "energy_kcal": 103.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.0,
    "magnesium_mg": 19.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 300.0,
    "potassium_mg": 320.0,
    "protein_g": 16.9,
    "salt_g": 2.5,
    "sat_fat_g": 1.2,
    "sodium_mg": 1000.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-027",
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
