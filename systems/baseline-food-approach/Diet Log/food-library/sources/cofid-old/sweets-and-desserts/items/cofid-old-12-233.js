/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 2 types, assorted flavours",
  "id": "cofid-old-12-233",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dessert powder, instant",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 60.1,
    "energy_kcal": 391.0,
    "fat_g": 17.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.5,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 650.0,
    "potassium_mg": 64.0,
    "protein_g": 2.4,
    "salt_g": 2.75,
    "sat_fat_g": 15.9,
    "sodium_mg": 1100.0,
    "sugar_g": 40.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-233",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
