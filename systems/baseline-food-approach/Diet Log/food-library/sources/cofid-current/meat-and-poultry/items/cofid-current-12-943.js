/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "12 samples from 3 egg distribution centres, including enriched cage, barn, free-range and organic",
  "id": "cofid-current-12-943",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, whole, poached",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 0.0,
    "energy_kcal": 149.0,
    "fat_g": 10.6,
    "fibre_g": 0.0,
    "folate_ug": 49.0,
    "iron_mg": 1.93,
    "magnesium_mg": 12.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 195.0,
    "potassium_mg": 117.0,
    "protein_g": 13.3,
    "salt_g": 0.3025,
    "sat_fat_g": 3.0,
    "sodium_mg": 121.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 150.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.82,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-943",
  "state": "Poached",
  "subcategory": "CA",
  "tags": [
    "ca",
    "meat-and-poultry",
    "poached"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
