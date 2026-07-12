/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 65% lean and 35% fat",
  "id": "cofid-current-18-555",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, belly joint, roasted, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 293.0,
    "fat_g": 21.4,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.7,
    "magnesium_mg": 20.0,
    "omega3_g": 0.45,
    "phosphorus_mg": 190.0,
    "potassium_mg": 310.0,
    "protein_g": 25.1,
    "salt_g": 0.225,
    "sat_fat_g": 7.43,
    "sodium_mg": 90.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-555",
  "state": "Roasted",
  "subcategory": "MAG",
  "tags": [
    "mag",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
