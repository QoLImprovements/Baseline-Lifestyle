/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Commercial ingredient, calculated from uncultured buttermilk",
  "id": "cofid-old-12-023",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Buttermilk powder",
  "nutritionPerBasis": {
    "calcium_mg": 1210.0,
    "carbs_g": 51.0,
    "energy_kcal": 373.0,
    "fat_g": 5.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.2,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 960.0,
    "potassium_mg": 1510.0,
    "protein_g": 34.1,
    "salt_g": 1.425,
    "sat_fat_g": 3.2,
    "sodium_mg": 570.0,
    "sugar_g": 51.0,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-023",
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
