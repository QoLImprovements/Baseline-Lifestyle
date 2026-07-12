/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including chocolate, toffee and caramel varieties",
  "id": "cofid-old-12-474",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheesecake, not fruit, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 30.6,
    "energy_kcal": 346.0,
    "fat_g": 23.6,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.81,
    "magnesium_mg": 15.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 83.0,
    "potassium_mg": 124.0,
    "protein_g": 4.8,
    "salt_g": 0.4525,
    "sat_fat_g": 12.11,
    "sodium_mg": 181.0,
    "sugar_g": 19.4,
    "vitamin_a_ug": 180.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-474",
  "state": "Frozen",
  "subcategory": "BR",
  "tags": [
    "br",
    "frozen",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
