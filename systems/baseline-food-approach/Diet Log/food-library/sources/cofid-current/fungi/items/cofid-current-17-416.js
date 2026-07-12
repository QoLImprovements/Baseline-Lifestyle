/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "Calculated from raw mushroom",
  "id": "cofid-current-17-416",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mushroom, dried",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 4.8,
    "energy_kcal": 159.0,
    "fat_g": 6.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 7.3,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 970.0,
    "potassium_mg": 3870.0,
    "protein_g": 21.8,
    "salt_g": 0.15,
    "sat_fat_g": 1.2,
    "sodium_mg": 60.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 14.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-416",
  "state": "Dried",
  "subcategory": "DI",
  "tags": [
    "di",
    "dried",
    "fungi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
