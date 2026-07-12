/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "4 samples, 3 brands. 38-49% meat",
  "id": "cofid-old-19-158",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey steaks in crumbs, frozen, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 18.9,
    "energy_kcal": 295.0,
    "fat_g": 17.1,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.1,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 240.0,
    "protein_g": 17.6,
    "salt_g": 1.75,
    "sat_fat_g": 4.2,
    "sodium_mg": 700.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-158",
  "state": "Grilled",
  "subcategory": "MI",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
