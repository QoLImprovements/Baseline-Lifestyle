/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "10 packets, 4 brands",
  "id": "cofid-old-17-261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup powder, instant, reduced calorie, assorted flavours",
  "nutritionPerBasis": {
    "calcium_mg": 280.0,
    "carbs_g": 51.5,
    "energy_kcal": 328.0,
    "fat_g": 9.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 9.7,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 630.0,
    "protein_g": 12.5,
    "salt_g": 14.55,
    "sat_fat_g": 0.0,
    "sodium_mg": 5820.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-261",
  "state": "Unspecified",
  "subcategory": "WAE",
  "tags": [
    "soups",
    "unspecified",
    "wae"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
