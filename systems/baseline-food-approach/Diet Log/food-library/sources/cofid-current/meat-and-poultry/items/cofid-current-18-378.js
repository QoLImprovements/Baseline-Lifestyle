/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from roast, meat only 18-377",
  "id": "cofid-current-18-378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grouse, meat only, roasted, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 59.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 2.1,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 180.0,
    "protein_g": 12.7,
    "salt_g": 0.1275,
    "sat_fat_g": 0.2,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-378",
  "state": "Roasted",
  "subcategory": "MCG",
  "tags": [
    "mcg",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
