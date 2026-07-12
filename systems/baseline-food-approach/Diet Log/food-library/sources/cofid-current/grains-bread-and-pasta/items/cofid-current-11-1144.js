/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "12 samples of 6 rolls, different shops",
  "id": "cofid-current-11-1144",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread rolls, brown, crusty",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 50.4,
    "energy_kcal": 255.0,
    "fat_g": 2.8,
    "fibre_g": 0.0,
    "folate_ug": 63.0,
    "iron_mg": 3.2,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 200.0,
    "protein_g": 10.3,
    "salt_g": 0.95,
    "sat_fat_g": 0.6,
    "sodium_mg": 380.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1144",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
