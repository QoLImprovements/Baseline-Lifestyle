/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "12 samples",
  "id": "cofid-current-18-557",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, belly joint/slices, raw, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 258.0,
    "fat_g": 20.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.35,
    "phosphorus_mg": 160.0,
    "potassium_mg": 290.0,
    "protein_g": 19.1,
    "salt_g": 0.1725,
    "sat_fat_g": 7.25,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-557",
  "state": "Raw",
  "subcategory": "MAG",
  "tags": [
    "mag",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
