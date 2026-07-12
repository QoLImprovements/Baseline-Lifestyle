/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Mixed sample including Bovril and own brands",
  "id": "cofid-current-17-514",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef extract",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 3.2,
    "energy_kcal": 179.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 1300.0,
    "iron_mg": 8.1,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 400.0,
    "potassium_mg": 970.0,
    "protein_g": 40.4,
    "salt_g": 10.925,
    "sat_fat_g": 0.0,
    "sodium_mg": 4370.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-514",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "meat-and-poultry",
    "unspecified",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
