/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe. Gujerati dish. Yogurt with chick pea flour and spices.",
  "id": "cofid-current-15-809",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Khadhi",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 6.6,
    "energy_kcal": 63.0,
    "fat_g": 2.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.66,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 179.0,
    "protein_g": 3.4,
    "salt_g": 0.0925,
    "sat_fat_g": 1.6,
    "sodium_mg": 37.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-809",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
