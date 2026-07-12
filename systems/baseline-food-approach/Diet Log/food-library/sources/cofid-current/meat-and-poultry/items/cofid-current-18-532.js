/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 98% lean and 2% fat",
  "id": "cofid-current-18-532",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, fillet medallions, grilled, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 161.0,
    "fat_g": 1.9,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.54,
    "magnesium_mg": 44.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 353.0,
    "potassium_mg": 658.0,
    "protein_g": 35.9,
    "salt_g": 0.165,
    "sat_fat_g": 0.67,
    "sodium_mg": 66.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-532",
  "state": "Grilled",
  "subcategory": "MAG",
  "tags": [
    "grilled",
    "mag",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
