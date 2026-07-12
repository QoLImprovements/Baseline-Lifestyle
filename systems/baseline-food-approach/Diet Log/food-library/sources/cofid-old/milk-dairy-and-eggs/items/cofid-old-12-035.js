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
  "id": "cofid-old-12-035",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Whey",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 5.1,
    "energy_kcal": 25.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.08,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 140.0,
    "protein_g": 1.0,
    "salt_g": 0.125,
    "sat_fat_g": 0.1,
    "sodium_mg": 50.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-035",
  "state": "Unspecified",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
