/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe. Made up according to packet directions",
  "id": "cofid-current-12-567",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Complan powder, sweet, made up with water",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 14.6,
    "energy_kcal": 98.0,
    "fat_g": 3.3,
    "fibre_g": 0.0,
    "folate_ug": 40.0,
    "iron_mg": 1.66,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 148.0,
    "protein_g": 3.5,
    "salt_g": 0.1075,
    "sat_fat_g": 1.46,
    "sodium_mg": 43.0,
    "sugar_g": 9.6,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 2.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-567",
  "state": "Unspecified",
  "subcategory": "BH",
  "tags": [
    "bh",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
