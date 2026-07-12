/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Made up according to packet directions.Calculated from 18g powder to 200ml milk",
  "id": "cofid-current-17-791",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Drinking chocolate powder, made up with skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 10.9,
    "energy_kcal": 62.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.31,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 189.0,
    "protein_g": 3.7,
    "salt_g": 0.1475,
    "sat_fat_g": 0.4,
    "sodium_mg": 59.0,
    "sugar_g": 10.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-791",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "milk-dairy-and-eggs",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
