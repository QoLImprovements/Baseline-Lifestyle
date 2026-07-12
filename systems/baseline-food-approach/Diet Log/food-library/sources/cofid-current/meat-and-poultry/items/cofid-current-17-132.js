/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "19 samples, 4 brands",
  "id": "cofid-current-17-132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork scratchings",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.2,
    "energy_kcal": 606.0,
    "fat_g": 46.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.4,
    "magnesium_mg": 18.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 180.0,
    "potassium_mg": 300.0,
    "protein_g": 47.9,
    "salt_g": 3.3,
    "sat_fat_g": 16.58,
    "sodium_mg": 1320.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-132",
  "state": "Unspecified",
  "subcategory": "SN",
  "tags": [
    "meat-and-poultry",
    "sn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
