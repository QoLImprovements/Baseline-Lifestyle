/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands. 69% meat",
  "id": "cofid-old-19-146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork haslet",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 11.4,
    "energy_kcal": 211.0,
    "fat_g": 12.6,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.9,
    "magnesium_mg": 16.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 210.0,
    "potassium_mg": 220.0,
    "protein_g": 13.6,
    "salt_g": 2.4,
    "sat_fat_g": 4.5,
    "sodium_mg": 960.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-146",
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
