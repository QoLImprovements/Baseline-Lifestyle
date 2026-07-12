/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "11 samples, assorted types; pork meat and liver based. 70-80% meat",
  "id": "cofid-current-19-145",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pate, meat, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 3.0,
    "energy_kcal": 191.0,
    "fat_g": 12.0,
    "fibre_g": 0.8,
    "folate_ug": 31.0,
    "iron_mg": 6.4,
    "magnesium_mg": 14.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 240.0,
    "potassium_mg": 190.0,
    "protein_g": 18.0,
    "salt_g": 1.775,
    "sat_fat_g": 3.5,
    "sodium_mg": 710.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 5930.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-145",
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
