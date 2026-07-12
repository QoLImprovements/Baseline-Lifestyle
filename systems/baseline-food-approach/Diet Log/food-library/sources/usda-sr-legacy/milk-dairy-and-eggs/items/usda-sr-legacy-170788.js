/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "breadstick",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170788",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "breadstick",
      "kind": "unit",
      "label": "breadstick"
    }
  ],
  "name": "Fast foods, breadstick, soft, prepared with garlic and parmesan cheese",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 44.5,
    "energy_kcal": 1430.0,
    "fat_g": 12.9,
    "fibre_g": 2.4,
    "folate_ug": 147.0,
    "iron_mg": 4.65,
    "magnesium_mg": 22.0,
    "omega3_g": 0.702,
    "phosphorus_mg": 129.0,
    "potassium_mg": 132.0,
    "protein_g": 12.2,
    "salt_g": 1.3475,
    "sat_fat_g": 2.97,
    "sodium_mg": 539.0,
    "sugar_g": 1.11,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 21.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170788",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
