/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "27 samples including self-basting turkey",
  "id": "cofid-current-18-358",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey, dark meat, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 177.0,
    "fat_g": 6.6,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.2,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 330.0,
    "protein_g": 29.4,
    "salt_g": 0.275,
    "sat_fat_g": 2.0,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-358",
  "state": "Roasted",
  "subcategory": "MCO",
  "tags": [
    "mco",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
