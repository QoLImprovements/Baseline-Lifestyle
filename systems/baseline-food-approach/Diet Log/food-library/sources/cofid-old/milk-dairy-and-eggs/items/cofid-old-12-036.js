/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Commercial ingredient, sweet whey, literature sources",
  "id": "cofid-old-12-036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Whey, dried",
  "nutritionPerBasis": {
    "calcium_mg": 790.0,
    "carbs_g": 78.0,
    "energy_kcal": 353.0,
    "fat_g": 1.3,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.9,
    "magnesium_mg": 150.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 770.0,
    "potassium_mg": 1980.0,
    "protein_g": 12.2,
    "salt_g": 2.725,
    "sat_fat_g": 0.8,
    "sodium_mg": 1090.0,
    "sugar_g": 78.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-036",
  "state": "Dried",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
