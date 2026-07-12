/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 2 from different establishments in each of 5 regions. Contains prawns in a dry sauce which includes onions, tomatoes, garlic, chilli and green peppers.",
  "id": "cofid-current-16-365",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, Prawn bhuna, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 1.8,
    "energy_kcal": 120.0,
    "fat_g": 8.7,
    "fibre_g": 2.5,
    "folate_ug": 4.0,
    "iron_mg": 4.39,
    "magnesium_mg": 27.0,
    "omega3_g": 0.67,
    "phosphorus_mg": 96.0,
    "potassium_mg": 207.0,
    "protein_g": 8.6,
    "salt_g": 0.8025,
    "sat_fat_g": 1.4,
    "sodium_mg": 321.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-365",
  "state": "Raw",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "jr",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
