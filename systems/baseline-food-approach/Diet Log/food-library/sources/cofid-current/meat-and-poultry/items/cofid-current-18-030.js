/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-18-030",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, fore-rib/rib-roast, microwaved, lean",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 243.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 2.8,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 290.0,
    "protein_g": 35.0,
    "salt_g": 0.15,
    "sat_fat_g": 5.0,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-030",
  "state": "Unspecified",
  "subcategory": "MAC",
  "tags": [
    "mac",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
