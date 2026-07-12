/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "8 samples, 4 products, including Swedish Glace ice cream",
  "id": "cofid-old-12-481",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream, dairy free/soya alternative",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 23.2,
    "energy_kcal": 208.0,
    "fat_g": 12.4,
    "fibre_g": 0.4,
    "folate_ug": 13.0,
    "iron_mg": 1.15,
    "magnesium_mg": 18.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 45.0,
    "potassium_mg": 103.0,
    "protein_g": 2.3,
    "salt_g": 0.2175,
    "sat_fat_g": 3.73,
    "sodium_mg": 87.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-481",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
