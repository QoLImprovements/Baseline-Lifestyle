/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Including original, chocolate and vanilla",
  "id": "cofid-current-17-729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Complan powder, original and sweet",
  "nutritionPerBasis": {
    "calcium_mg": 540.0,
    "carbs_g": 64.8,
    "energy_kcal": 438.0,
    "fat_g": 14.7,
    "fibre_g": 0.0,
    "folate_ug": 180.0,
    "iron_mg": 7.4,
    "magnesium_mg": 96.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 440.0,
    "potassium_mg": 660.0,
    "protein_g": 15.6,
    "salt_g": 0.475,
    "sat_fat_g": 6.5,
    "sodium_mg": 190.0,
    "sugar_g": 42.8,
    "vitamin_a_ug": 440.0,
    "vitamin_c_mg": 70.0,
    "vitamin_e_mg": 11.0,
    "vitamin_k_ug": 67.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-729",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "other-foods",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
