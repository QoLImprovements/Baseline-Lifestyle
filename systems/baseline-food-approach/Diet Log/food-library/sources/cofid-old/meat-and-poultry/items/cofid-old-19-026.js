/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 7 brands; loose and prepacked including honey glazed and smoked ham. No added water",
  "id": "cofid-old-19-026",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ham, premium",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.5,
    "energy_kcal": 132.0,
    "fat_g": 5.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 240.0,
    "potassium_mg": 320.0,
    "protein_g": 21.2,
    "salt_g": 2.625,
    "sat_fat_g": 1.7,
    "sodium_mg": 1050.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-026",
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
