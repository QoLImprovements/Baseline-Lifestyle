/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "11 samples, mixture of UK and Spain, ends trimmed. Cut into chunks or slices, coated with 0.5-1 tbsp fat and roasted for 20 minutes",
  "id": "cofid-current-13-629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Courgette, roasted in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 3.55,
    "energy_kcal": 39.0,
    "fat_g": 1.9,
    "fibre_g": 0.77,
    "folate_ug": 23.0,
    "iron_mg": 0.65,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 526.0,
    "protein_g": 2.0,
    "salt_g": 0.0,
    "sat_fat_g": 0.16,
    "sodium_mg": 0.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-629",
  "state": "Roasted",
  "subcategory": "DG",
  "tags": [
    "dg",
    "oils-and-fats",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
