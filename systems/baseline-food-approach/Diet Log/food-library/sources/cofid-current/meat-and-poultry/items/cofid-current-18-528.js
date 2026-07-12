/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Extra lean types. Calculated from 98% lean and 2% fat",
  "id": "cofid-current-18-528",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, diced, casseroled, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 203.0,
    "fat_g": 6.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.0,
    "magnesium_mg": 40.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 321.0,
    "potassium_mg": 590.0,
    "protein_g": 36.3,
    "salt_g": 0.22,
    "sat_fat_g": 2.14,
    "sodium_mg": 88.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-528",
  "state": "Unspecified",
  "subcategory": "MAG",
  "tags": [
    "mag",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
