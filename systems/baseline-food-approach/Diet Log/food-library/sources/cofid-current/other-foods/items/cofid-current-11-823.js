/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, Nairns and own label",
  "id": "cofid-current-11-823",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oatcakes, plain, retail",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 62.8,
    "energy_kcal": 453.0,
    "fat_g": 20.0,
    "fibre_g": 9.4,
    "folate_ug": 26.0,
    "iron_mg": 3.82,
    "magnesium_mg": 101.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 383.0,
    "potassium_mg": 359.0,
    "protein_g": 9.3,
    "salt_g": 1.99,
    "sat_fat_g": 5.67,
    "sodium_mg": 796.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-823",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
